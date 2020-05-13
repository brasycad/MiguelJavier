import { of, timer, fromEvent } from "rxjs";
import { map, filter ,debounceTime} from "rxjs/operators";
import { IsEven } from "./functionals";
import {data,}from './data'

const inputElement = document.getElementById("my-input");


fromEvent(inputElement,'keyup')
            .pipe(
                debounceTime(5000)
            )
            .subscribe((val:KeyboardEvent)=>{
              //console.log(val.key)
            const intpuVal=inputElement.value.toLowerCase()
            const result = data.filter((val)=>{
                return val.ids.primario.toLowerCase().indexOf(intpuVal)>-1
            })
            console.log(result)
            });
            



