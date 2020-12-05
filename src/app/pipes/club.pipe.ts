import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'club',
})
export class ClubPipe implements PipeTransform {
  transform(clubName: string): string {
    console.log(clubName);
    switch (clubName) {
      case 'barca':
        return 'blaugrana';
      case 'real':
        return 'merungue';
      case 'athletico':
        return 'colchoneros';
      default:
        return clubName;
    }
  }
}
