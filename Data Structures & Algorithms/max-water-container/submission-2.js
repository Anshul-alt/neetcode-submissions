class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(height) {
        let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
        const width = right - left;          // 1
        const h = Math.min(height[left], height[right]); // min(0,2) = 0
        const area = width * h;              // 1 * 0 = 0
        maxWater = Math.max(maxWater, area); // max(0,0) = 0
        if (height[left] < height[right]) {
            left++;   // 0 < 2 → left = 1
        } else {
            right--;
        }
    }
    return maxWater;
    }
}