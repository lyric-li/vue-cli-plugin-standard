/**
 * 延时执行
 * @param {*} n 延时秒杀
 * @returns Promise
 */
export function sleep(n) {
  return new Promise((resolve) => {
    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      resolve();
    }, n * 1000);
  });
}

/**
 * 数组转对象
 * @param {*} arr 目标数组
 * @param {*} k1 key1
 * @param {*} k2 key2
 */
export function array2obj(
  arr = [],
  k1 = "id",
  k2 = "name",
) {
  return Object.fromEntries(
    arr.map((item) => [item[k1], item[k2]]),
  );
}

/**
 * 对象转数组
 * @param {*} arr 目标对象
 * @param {*} k1 key1
 * @param {*} k2 key2
 */
export function obj2Array(
  obj = {},
  k1 = "value",
  k2 = "label",
) {
  return Object.entries(obj)
    .map(([key, value]) => ({ [k1]: key, [k2]: value }));
}
