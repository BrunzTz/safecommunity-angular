import { Injectable } from '@angular/core';
import { NbGlobalPhysicalPosition, NbGlobalPosition, NbToastrService } from '@nebular/theme';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private destroyByClick = true;
  private duration = 2000;
  private hasIcon = true;
  private position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  private preventDuplicates = false;

  constructor(private toastrService: NbToastrService) { }

  public success(title: string) {
    const config = {
      status: 'success',
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.toastrService.show(title, config);
  }
  
  public error(title: string) {
    const config = {
      status: 'danger',
      destroyByClick: this.destroyByClick,
      duration: this.duration,
      hasIcon: this.hasIcon,
      position: this.position,
      preventDuplicates: this.preventDuplicates,
    };

    this.toastrService.show(title, config);
  }
}
