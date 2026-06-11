class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let set = {};
        for (let num of nums) {
            if (!set[num]) {
                set[num] = 0;
            }
            set[num] += 1;
        }

        let sorted = Object.keys(set).sort((a, b) => set[b] - set[a]);
        const ans = sorted.slice(0, k);
        return ans;
    }
}
