import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchString: string) {
    // console.log(searchString)
    if (value.length === 0 || searchString === '') {
      return value;
    }

    const searchResult = [];
    for(const note of value){
      if(note.title.toLowerCase().includes(searchString.toLowerCase()) || note.description.toLowerCase().includes(searchString.toLowerCase())){
        searchResult.push(note);
      }
    }
    return searchResult;
  }

}
