import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`
            <br/>              
              <p>Child Component is: {{name}}</p>
              <hr/>             
              <button [disabled] = "voted" (click) = "vote(true)">Đồng ý</button>
              <button [disabled] = "voted" (click) = "vote(false)">Không đồng ý</button>
              Result:{{voted}}
    `
})
export class TutorialComponent{
    public title = "2017";

    @Input() name:string;    
    @Output() onVote = new EventEmitter<boolean>();
    
    public voted : boolean = false;

    vote(agr:boolean){
        this.voted = true;
        this.onVote.emit(agr);
    }

    public setName(arg:string){
        this.name = arg;
    }
    
}
