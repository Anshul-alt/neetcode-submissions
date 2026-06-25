class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;
        let longest = 1;
        const set = new Set(nums);

        for (let num of nums) {
            if (!set.has(num - 1)) {
                let length = 1;
                let current = num;
                while (set.has(current + 1)) {
                    length++;
                    current++;
                }
                longest = Math.max(longest, length);
            }
        }
        return longest;
    }
}
