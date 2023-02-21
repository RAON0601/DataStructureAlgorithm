/**
 * @export
 * @class Stack
 */
export class Stack<T> {
  data: T[];

  /**
   * 스택 인스턴스 생성
   * @memberof Stack
   */
  constructor() {
    this.data = [];
  }

  /**
   * 스택에 새로운 요소 추가
   * @param  {any} value
   */
  push(value: T) {
    this.data.push(value);
  }

  /**
   * 스택의 맨 앞 요소 반환
   * @returns any
   */
  peek(): any {
    if (this.isEmpty()) {
      return null;
    }

    return this.data[this.data.length - 1];
  }

  /**
   * 스택이 비어있다면 true를 반환한다.
   * @returns boolean
   */
  isEmpty(): boolean {
    return this.data.length == 0;
  }

  /**
   * 스택의 마지막 요소를 반환한다.
   * @returns any
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }

    return this.data.pop() as T;
  }

  /**
   * 스택의 문자열 표현을 반환한다.
   * @param  {(value:any)=>string} callback?
   */
  toString(callback?: (value: any) => string) {
    return this.toArray()
      .map((i) => (callback ? callback(i) : `${i}`))
      .join(',');
  }

  /**
   * 스택을 배열로 변환해서 반환한다.
   * @returns any
   */
  toArray(): T[] {
    return [...this.data].reverse();
  }
}
