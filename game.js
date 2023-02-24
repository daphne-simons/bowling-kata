
///basic sum
function getscore(arr){
    let total=0//total score
    for(let i=0;i<arr.length;i++){
        j=arr[i]//value of frame
        let s=false//boolean value to see if strike or not
        let add=0

        if(j[0]==10){//if strike
            s=true
            add+=strike(arr,i)
        }
        let bowl=''
        if(j[0]+j[1]<10){//if normal bowl
            add+=nomral(arr,i)
            bowl='normal'
        }
        if(j[0]+j[1]==10&&i<arr.length-1&&!s){//if spare
            add+=spare(arr,i)
        }

        total+=add
    }
return total
}

function nomral(arr,idx){
    return arr[idx][0]+arr[idx][1]
}

function spare(arr,idx){
    return arr[idx][0]+arr[idx][1]+arr[idx+1][0]
}

function strike(arr,idx){
    if(idx==arr.length-1){
        return 30//if the final bowl is a strike
    }
    if(arr[idx+1][0]==10){
        return doubleStrike(arr,idx)
        }
        return arr[idx][0]+arr[idx][1]+arr[idx+1][0]+arr[idx+1][1]//return sum of frame and next frame
}
function doubleStrike(arr,idx){
    if (idx<8){
        return arr[idx][0]+arr[idx][1]+arr[idx+1][0]+arr[idx+1][1]+arr[idx+2][0]//return sum of frame N and frame N+1 and the first bowl of frame N+2
    }
    return  arr[idx][0]+arr[idx][1]+arr[idx+1][0]+arr[idx+1][1]
       
}


module.exports=getscore
