import { Component,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'my-tutorial',
    template:`
          <h2>{{title}}</h2>
            <p>Today is {{today | date}}</p>
    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
    <p>The time is {{today | date:'jmZ'}}</p>
    <p>Date for VN {{today | date:'dd/MM/yyyy'}}</p>
       <p>e (no formatting): {{e}}</p>
    <p>e (3.1-5): {{e | number:'3.1-5'}}</p>
    <p>pi (no formatting): {{pi}}</p>
    <p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>
    <br/>
    <div>
    <p>Without JSON pipe:</p>
    <pre>{{object}}</pre>
    <p>With JSON pipe:</p>
    <pre>{{object | json}}</pre>
  </div>
    `
})
export class TutorialComponent{
    public title = "2017";  
    public today = Date.now();
    pi: number = 3.141592;
    e: number = 2.718281828459045;
   object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
}
