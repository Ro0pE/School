




export class Scoring {

    scores;
    constructor(){
        this.scores = 0


    }

    linesCleared(lines,level){
        let multiplier = level + 1
        if (lines === 1){
            let base_point_1 = 40
            let total_points =  base_point_1 * multiplier
            this.scores += total_points
            return this.scores

        }
        if (lines === 2){
            let base_point_2 = 100
            let total_points =  base_point_2 * multiplier
            this.scores += total_points
            return this.scores
        }
        if (lines === 3){
            let base_point_3 = 300
            let total_points =  base_point_3 * multiplier
            this.scores += total_points
            return this.scores
        }
        if (lines === 4){
            let base_point_4 = 1200
            let total_points =  base_point_4 * multiplier
            this.scores += total_points
            return this.scores
        }
    }
}