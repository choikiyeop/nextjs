/**
 * Next.js는 SSR 후 CSR을 실행한다. 따라서 SSR 상태에서는 window 객체가 없기 때문에
 * 클라이언트 페이지가 마운트 될때까지 기다려야한다.
 */
class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, item);
    }
  }

  static getItem(key: string) {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }
}

export default LocalStorage;
