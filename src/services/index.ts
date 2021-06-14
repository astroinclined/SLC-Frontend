export default class HttpService {
  private static async fetch<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, init);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return await res.json();
  }

  static get<T>(url: string): Promise<T> {
    return this.fetch(url);
  }

  static post<T>(url: string, data: object): Promise<T> {
    return this.fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
  }
}
