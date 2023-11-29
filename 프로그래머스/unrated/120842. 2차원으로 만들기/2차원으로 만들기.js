function solution(num_list, n) {
    var answer = [];
    let count = 0;
    
    for(let i=0; i<num_list.length; i+=n){
        answer.push([])
        for(let j=i; j<i+n; j++){
            answer[count].push(num_list[j])
        }
        count++
    }
    
    return answer;
}