
/**
 * 542. 01 Matrix
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    let result = [];
    let row = matrix.length;
    if (row == 1) {
      return matrix;
    }
    let column = matrix[0].length
    for (let i = 0; i<row; i++) {
      let t = [];
      for (let j = 0; j < column; j++) {
        t.push(Infinity);
      }
      result.push(t)
    }
    for (let i = 0; i<row; i++) {
      for (let j = 0; j < column; j++) {
        
      }
    }
    
    return result;
};


// updateMatrix([[0,0,0],[0,1,0],[1,1,1]])

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  let len = bits.length;
  if (len == 1) {
    return bits[0] == 0;
  }
  for(let i = 0; i < len; i++) {
    if (bits[i] == 1) {
      if (i < len - 2) {
        i++;
      } else if (i == len - 2) {
        return false
      } else {
        return true
      }
    } else {
      if (i == len - 1) {
        return true;
      }
    }
  }
  return false;
};

// console.log(isOneBitCharacter([1,0]))
// console.log(isOneBitCharacter([1,1,1,0]))

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    let lena = A.length;
    let lenb = B.length;

    let short = A;
    let long = B;
    if (lena > lenb) {
      short = B;
      long = A;
    }

    let max = 0;
    for (let i = 0; i< short.length; i++) {
      if (short.length - i <= max) {
        break;
      }
      for (let j = 0; j < long.length; j++) {
        if (long.length - j <= max) {
          break;
        }
        let ti = i;
        let tj = j;
        let temp = 0;
        while (long[tj] == short[ti] && tj < long.length && ti < short.length) {
          temp++;
          ti++;
          tj++;
        }
        max = Math.max(temp, max);
      }
    }
    console.log(max)
};

// findLength([1,2,3,2,1], [1,2,3,2,1,4,7]);
// findLength([0,0,0,0,0], [0,0,0,0,0]);

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var smallestDistancePair = function(nums, k) {
//   if (nums.length == 1) {
//     return nums[0];
//   }
//   let head = {
//     val: Math.abs(nums[1] - nums[0]),
//     count: 0,
//     next: null
//   };
//   for (let i = 0; i < nums.length; i++) {
//     let first = nums[i];
//     for (let j = i + 1; j < nums.length; j++) {
//       let second = nums[j];
//       let t = Math.abs(first - second);
//       if (t < head.val) {
//         let node = {
//           val: t, count: 1, next: null
//         }
//         node.next = head;
//         head = node;
//         continue;
//       }
//       if (t == head.val) {
//         head.count += 1;
//         continue;
//       }
//       let temp = head;
//       if (temp.next == null) {
//         head.next = {
//           val: t, count: 1, next: null
//         }
//         continue;
//       }
//       while (temp) {
//         if (temp.next == null) {
//           temp.next = {
//             val: t, count: 1, next: null
//           }
//           break;
//         }
//         if (temp.next.val == t) {
//           temp.next.count += 1;
//           break;
//         }
//         if (temp.next.val > t) {
//           let node = {
//             val: t, count: 1, next: null
//           }
//           node.next = temp.next;
//           temp.next = node;
//           break;
//         }
//         temp = temp.next;
//       }
//     }
//   }
//   let t = head;
//   let kk = k;
//   while (t) {
//     console.log(t.count, t.val)
//     if (kk <= t.count) {
//       break;
//     }
//     kk -= t.count
//     t = t.next
//   }
//   console.log(t.val);
// }

var smallestDistancePair = function(nums, k) {
  if (nums.length == 1) {
    return nums[0];
  }
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let val = Math.abs(nums[j] - nums[i]);
      if (map[val]) {
        map[val] += 1;
      } else {
        map[val] = 1;
      }
    }
  }
  let keys = Object.keys(map).sort(function(a, b) {
    return parseInt(a) < parseInt(b);
  });
  let kk = k;
  let val = '0';
  console.log(keys)
  for (let i = 0; i < keys.length; i++) {
    val = keys[i];
    if (kk <= map[val]) {
      break;
    }
    kk -= map[val];
    // console.log(kk, val)
  }
  console.log(val)
  return parseInt(val)
}

// smallestDistancePair([1,2,4,7,13,20,33,66],7)
// smallestDistancePair([2,2,0,1,1,0,0,1,2,0],33)
// smallestDistancePair([38,33,57,65,13,2,86,75,4,56],26)

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
  let map = {};
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    map[element] = true;
  }
  let result = "";
  for (let j = 0; j < words.length; j++) {
    let word = words[j];
    let temp = "";
    for (let k = 1; k < word.length + 1; k++) {
      let sub = word.substr(0, k)
      if (map[sub]) {
        temp = sub;
      } else {
        break;
      }
    }
    if (result.length == temp.length) {
      result = result < temp ? result : temp;
    } else if (result.length <= temp.length) {
      result = temp;
    }
  }
  return result;
};

// console.log(longestWord(["w","wo","wor","worl", "world"]))
// console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))
