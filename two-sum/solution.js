/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const objectNum = new Map()
 for(let i = 0; i < nums.length; i++){
   const selisih = target - nums[i]
   if(objectNum.has(selisih)){
     return [objectNum.get(selisih), i]
   }
   objectNum.set(nums[i], i)
 }
 return []
};
   