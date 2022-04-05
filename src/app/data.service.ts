// import { retry, catchError, tap } from 'rxjs/operators';

// public first: string = "";  
// public prev: string = "";  
// public next: string = "";  
// public last: string = "";

// parseLinkHeader(header) {
//     if (header.length == 0) {
//       return ;
//     }

//     let parts = header.split(',');
//     var links = {};
//     parts.forEach( p => {
//       let section = p.split(';');
//       var url = section[0].replace(/<(.*)>/, '$1').trim();
//       var name = section[1].replace(/rel="(.*)"/, '$1').trim();
//       links[name] = url;

//     });

//     this.first  = links["first"];
//     this.last   = links["last"];
//     this.prev   = links["prev"];
//     this.next   = links["next"]; 
//   }