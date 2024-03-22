class AssetMananger {
  /*
  static load<T>(url: string): T {
    return url as T;
  }*/

  static loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      let img = document.createElement("img");
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`error load img ${url}`));
      img.src = url;
    });
  }
}
