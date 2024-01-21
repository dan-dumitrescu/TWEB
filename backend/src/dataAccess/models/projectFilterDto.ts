import paginationDto from "./paginationDto";

export default class projectFilterDto extends paginationDto{
    projectName!: string | null
    projectId!: number | null  

    constructor(obj : Partial<projectFilterDto>){
        super();        
        Object.assign(this, obj);
        this.setTakeAndSkip(this.take, this.skip)       
    }
}