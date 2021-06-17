import { connect, ConnectedProps } from 'react-redux';
import { ReduxState } from '../types';
import { setView, loadCategoryModules, loadSearchResults } from "../actions";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Display, Module } from '../Data';
import ModuleCard from './Card';
import SecondaryCard from './SecondaryCard';
import PDFCard from './pdfCard';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link'
import { useHistory, useLocation } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    font: 'Roboto Slab',
  },
  leftAlignText: {
    textAlign: 'left',
  },
  textCard: {
    '&&': {
      paddingTop: 2,
      paddingBottom: 2,
    },
  }
}));

const mapDispatchToProps = {
  setView,
  loadCategoryModules,
  loadSearchResults,
}

const mapStateToProps = (state: ReduxState) => ({
  results: state.results,
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type Props = ConnectedProps<typeof connector>;

function SubmoduleView(props: Props) {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const { results } = props;

  const first = results[0];
  const segments = location.pathname.split('/');

  const getCardByDisplay = (module: Module) => {
    switch (module.display) {
      case Display.Primary:
        return <Grid item xs={12} sm={6} md={4}><ModuleCard title={module.name} author={module.source} port={module.port} url={module.url} /></Grid>
      case Display.Secondary:
        return <Grid item xs={12} sm={6} md={4}><SecondaryCard title={module.name} author={module.source} port={module.port} url={module.url} /></Grid>;
      case Display.Text:
        return <Grid item xs={12} sm={12} md={12} className={classes.textCard}><PDFCard title={module.name} author={module.source} port={module.port} url={module.url} /></Grid>
    }
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={12} md={12} className={classes.leftAlignText}>
        <Breadcrumbs separator="›" aria-label="breadcrumb">
          <Link color="inherit" onClick={() => history.push(segments.slice(0, 2).join('/'))}>
            {results[0].source}
          </Link>
          <Link color={!first.parent_module?.parent_module ? "textPrimary" : "inherit"} onClick={() => history.push(segments.slice(0, 3).join('/'))}>
            {first.parent_module?.parent_module?.name || first.parent_module?.name}
          </Link>
          {first.parent_module?.parent_module && (
            <Link color={first.parent_module?.parent_module ? "textPrimary" : "inherit"} onClick={() => history.push(segments.slice(0, 4).join('/'))}>
              {first.parent_module?.name}
            </Link>
          )}
        </Breadcrumbs>
        <Typography variant="h4">{first.parent_module?.name}</Typography>
      </Grid>
      {results.map(getCardByDisplay)}
    </Grid>
  );
}

export default connector(SubmoduleView);
