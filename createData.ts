/**
 * This script is used to create the data array from Data.ts.
 * To use it, copy and paste the uncommented code into the old
 * SLC at 172.103.227.241:8010.
 * 
 * Copy the stringifed JSON to the string variable and parse
 * it into a JS object. Run the commented code in a terminal
 * to fully print the object, and copy the output to a JS file.
 * 
 * You will need to replace all "}" with "}," on the copied
 * output to make the JS array valid.
 * 
 * NOTE: The script does not populate all the subcategory tags,
 * most need to be added in manually. The resource modules are
 * also merged with the rest and should be separated manually.
 */

import { Arts, DataObject, EverydayLife, Literature, Tag } from './src/react/Data';

let objs: DataObject[] = [];
let blacklist = ['Exercises', 'Tests', 'Printable PDF'];
let els = document.getElementsByTagName('a');
for (let i = 0; i < els.length; i++) {
  const el = els[i];
  let obj = {
    name: el.text.trim().replace(/\*/g, ''),
    port: el.port,
    url: el.pathname,
  }

  if (blacklist.includes(obj.name)) {
    continue;
  }

  if (el.pathname.startsWith('/learn/khan')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'KA Lite Essentials',
      tags: {}
    });
  }

  else if (el.pathname.startsWith('/modules/en-afristory')) {
    objs.push({
      ...obj,
      type: 'module+',
      by: 'African Storybooks',
      tags: {
        [Tag.Literature]: Literature.Fiction,
        [Tag.Languages]: null as unknown as undefined,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-ck12')) {
    objs.push({
      ...obj,
      type: 'pdf',
      by: 'CK-12 Textbooks',
      tags: {}
    });
  }

  else if (el.pathname.startsWith('/modules/en-ebooks')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Great Books of the World',
      tags: {
        [Tag.Literature]: Literature.Fiction,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-GCF2015')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'GCF Learnfree',
      tags: {}
    });
  }

  else if (el.pathname.startsWith('/modules/en-hesperian_health')) {
    objs.push({
      ...obj,
      type: 'pdf',
      by: 'Hesperian Health Guides',
      tags: {
        [Tag.EverydayLife]: EverydayLife.HumanHealth,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-infonet')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Infonet - Biovision',
      tags: {
        [Tag.EverydayLife]: null as unknown as undefined,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-medline_plus')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Medline Plus',
      tags: {
        [Tag.EverydayLife]: EverydayLife.HumanHealth,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-musictheory')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Music Theory',
      tags: {
        [Tag.Arts]: Arts.Music,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-practical_action')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Practical Action',
      tags: {
        [Tag.EverydayLife]: null as unknown as undefined,
      }
    });
  }

  else if (el.pathname.startsWith('/wikipedia_en_for_schools_opt_2013')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Wikipedia for Schools',
      tags: {}
    });
  }

  else if (el.pathname.startsWith('/wikivoyage_en_all_2016-04')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Wikivoyage',
      tags: {
        [Tag.Arts]: Arts.Geography,
      }
    });
  }

  else if (el.pathname.startsWith('/wiktionary_en_all_2015-11')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Wiktionary',
      tags: {
        [Tag.Languages]: null as unknown as undefined,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-worldmap')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Interactive World Map',
      tags: {
        [Tag.Arts]: Arts.Geography,
      }
    });
  }

  else if (el.pathname.startsWith('/modules/en-windows_apps')) {
    objs.push({
      ...obj,
      type: 'module',
      by: 'Windows Applications',
      tags: {}
    });
  }
}

JSON.stringify(objs);

// const string = "";
// const data = JSON.parse(string);

// console.log('[');
// data.forEach(e => {
//   console.log(e);
// });
// console.log(']');
