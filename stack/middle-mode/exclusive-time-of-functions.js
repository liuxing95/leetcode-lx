// 636. 函数的独占时间

// https://leetcode-cn.com/problems/exclusive-time-of-functions/

// 给出一个非抢占单线程CPU的 n 个函数运行日志，找到函数的独占时间。

// 每个函数都有一个唯一的 Id，从 0 到 n-1，函数可能会递归调用或者被其他函数调用。

// 日志是具有以下格式的字符串：function_id：start_or_end：timestamp。例如："0:start:0" 表示函数 0 从 0 时刻开始运行。"0:end:0" 表示函数 0 在 0 时刻结束。

// 函数的独占时间定义是在该方法中花费的时间，调用其他函数花费的时间不算该函数的独占时间。你需要根据函数的 Id 有序地返回每个函数的独占时间。

// 示例 1:

// 输入:
// n = 2
// logs = 
// ["0:start:0",
//  "1:start:2",
//  "1:end:5",
//  "0:end:6"]
// 输出:[3, 4]
// 说明：
// 函数 0 在时刻 0 开始，在执行了  2个时间单位结束于时刻 1。
// 现在函数 0 调用函数 1，函数 1 在时刻 2 开始，执行 4 个时间单位后结束于时刻 5。
// 函数 0 再次在时刻 6 开始执行，并在时刻 6 结束运行，从而执行了 1 个时间单位。
// 所以函数 0 总共的执行了 2 +1 =3 个时间单位，函数 1 总共执行了 4 个时间单位。
// 说明：

// 输入的日志会根据时间戳排序，而不是根据日志Id排序。
// 你的输出会根据函数Id排序，也就意味着你的输出数组中序号为 0 的元素相当于函数 0 的执行时间。
// 两个函数不会在同时开始或结束。
// 函数允许被递归调用，直到运行结束。
// 1 <= n <= 100

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
// var exclusiveTime = function (n, logs) {
//   const stack = [];
//   //对应栈id当前操作时间戳
//   const funcTime = Array(n).fill(0);
//   //对应不同栈历史耗时
//   const funcSumTime = [];
//   for (let i = 0;i < n;i++) {
//       funcSumTime[i] = [];
//   }
//   let prev = 0;
//   for (let i = 0; i < logs.length; i++) {
//       let item = logs[i].split(":");
//       item[0] = Number(item[0]);
//       item[2] = Number(item[2]);
//       if (item[1] === "start") {
//           if (stack.length) {
//               //funcTime[stack[stack.length - 1]] += item[2] - prev;
//               funcSumTime[stack[stack.length - 1]].push(item[2] - prev);
//           }
//           stack.push(item[0]);
//           funcTime[item[0]] = item[2];
//           prev = item[2];
//           //console.log("start", item, stack, funcTime, JSON.stringify(funcSumTime));
//       } else if (item[1] === "end") {
//           funcTime[stack[stack.length - 1]] = item[2] - prev + 1;
//           funcSumTime[stack[stack.length - 1]].push(funcTime[stack[stack.length - 1]]);
//           stack.pop();
//           prev = item[2] + 1;
//           //console.log("end", item, stack, funcTime, JSON.stringify(funcSumTime));
//       }
//   }
//   console.log(funcSumTime)
//   // return funcSumTime.map((item, index) => {
//   //     return funcSumTime[index].reduce((accumulator, currentValue) => accumulator + currentValue)
//   // });
// };
var handleString = function(s) {
  let item = s.split(":");
  item[0] = Number(item[0]);
  item[2] = Number(item[2]);
  return item
}
var exclusiveTime = function (n, logs) {
  const stack = [];
  //对应栈id当前操作时间戳
  const funcTime = Array(n).fill(0);
  let prev = 0
  while(logs.length !== 0) {
    var first = logs[0];
    const item = handleString(first)
    if (item[1] === 'start') {
      if (stack.length !== 0) {
        var diff = item[2] - prev
        prev = item[2]
        const lastItem = handleString(stack[stack.length - 1])
        funcTime[lastItem[0]] = funcTime[lastItem[0]] + diff
      }
      stack.push(first)
    } else {
      var diff = item[2] + 1 - prev
      prev = item[2] + 1
      funcTime[item[0]] = funcTime[item[0]] + diff
      stack.pop()
    }
    logs = logs.slice(1)
  }
  console.log(funcTime)
  return funcTime
}

// var logs = ["0:start:0",
//  "1:start:2",
//  "1:end:5",
//  "2:start:6",
//  "2:end:9",
//  "0:end:12"]

//  exclusiveTime(3, logs)

//  [5, 4, 4]


var logs = [
  "0:start:0",
  "1:start:5",
  "2:start:6",
  "3:start:9",
  "4:start:11",
  "5:start:12",
  "6:start:14",
  "7:start:15",
  "1:start:24",
  "1:end:29",
  "7:end:34",
  "6:end:37",
  "5:end:39",
  "4:end:40",
  "3:end:45",
  "0:start:49",
  "0:end:54",
  "5:start:55",
  "5:end:59",
  "4:start:63",
  "4:end:66",
  "2:start:69",
  "2:end:70",
  "2:start:74",
  "6:start:78",
  "0:start:79",
  "0:end:80",
  "6:end:85",
  "1:start:89",
  "1:end:93",
  "2:end:96",
  "2:end:100",
  "1:end:102",
  "2:start:105",
  "2:end:109",
  "0:end:114"
]
exclusiveTime(8, logs)

// [20,14,35,7,6,9,10,14]