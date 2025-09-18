import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


declare var google: any;

@Component({
  selector: 'app-direccion-autocompletado',
  imports: [FormsModule],
  templateUrl: './direccion-autocompletado.html',
  styleUrl: './direccion-autocompletado.css'
})
export class DireccionAutocompletado {

  @Input()
  adressType!: string;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  @ViewChild('addresstext') addresstext: any;

  autocompleteInput!: string;
  queryWait!: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.getPlaceAutocomplete();
  }

  private getPlaceAutocomplete() {
    const autocomplete = new google.maps.places.Autocomplete(this.addresstext.nativeElement,
      {
        componentRestrictions: { country: 'AR' },
        types: [this.adressType]
      });
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      const place = autocomplete.getPlace();
      this.invokeEvent(place);
    });
  }

  invokeEvent(place: Object) {
    this.setAddress.emit(place);
  }

}
