import { Queue } from './Queue';
import exp = require('constants');

describe('큐는 선입 선출 자료구조이다.', () => {
  it('선입 선출 테스트', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.dequeue()).toBe(1);
    expect(queue.dequeue()).toBe(2);
    expect(queue.dequeue()).toBe(3);
  });

  it('큐가 비어 있으면 undefined가 나온다', () => {
    const queue = new Queue<number>();
    expect(queue.dequeue()).toBe(undefined);
  });

  it('큐가 비어있을때 isEmpty는 true이다', () => {
    const queue = new Queue<number>();
    expect(queue.getLength()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
  });

  it('큐가 비어있지 않을때 isEmpty는 false이다', () => {
    const queue = new Queue<number>();
    queue.enqueue(1);

    expect(queue.getLength()).toBeGreaterThan(0);
    expect(queue.isEmpty()).toBe(false);
  });
});
