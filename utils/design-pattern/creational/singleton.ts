// 전역적으로 사용할 수 있는 유일한 인스턴스를 생성하는 패턴
class Singleton {
  private name?: string;

  constructor() {
    console.log("singleton created");
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName() {
    return this.name;
  }
}

export const singleton = new Singleton();
