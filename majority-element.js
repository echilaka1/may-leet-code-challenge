var majorityElement = function(nums) 
{
        var map = {}, majority = Math.ceil(nums.length/2);
        nums.forEach(val=>{if(map[val] === undefined)map[val]=0;map[val]++;});
        for(let num in map)
        {
                if(map.hasOwnProperty(num) && map[num] >= majority)
                        return num;
        }    
};