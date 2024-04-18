import { AfterViewInit, Component, ElementRef } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'portfolio';
  navVisible = false;

  constructor (private elementRef: ElementRef) {}

  ngAfterViewInit() {
    jQuery(this.elementRef.nativeElement).find('.item-wrap a').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'
    });

    jQuery(document).on('click', '.popup-modal-dismiss', function (e:any) {
      e.preventDefault();
      jQuery.magnificPopup.close();
    });
  }

  openPopup() {
    // Open the popup manually if needed
    jQuery.magnificPopup.open({
      items: {
        src: '#popup-content'
      },
      type: 'inline'
    });
  }

  closePopup() {
    // Close the popup manually if needed
    jQuery.magnificPopup.close();
  }

  toggleMenu() {
    this.navVisible = !this.navVisible;
  }

  closeMenu() {
    this.navVisible = false;
  }

  downloadResume() {
    const resumeUrl = '/assets/Ahsan_Shaikh-1-2-2.pdf'; // Replace with the actual path to your resume file
    const anchor = document.createElement('a');
    anchor.href = resumeUrl;
    anchor.download = 'ahsan_resume.pdf'; // Specify the desired filename for download
    anchor.click();
  }
}
