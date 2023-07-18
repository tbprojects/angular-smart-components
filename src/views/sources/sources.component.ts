import { Component, ElementRef, inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SOURCE_FILES } from '../../tokens/source';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sources',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sources.component.html'
})
export default class SourcesComponent implements OnInit {
  @ViewChild('scriptContainer', {static: true}) private scriptContainer!: ElementRef<HTMLDivElement>;
  private renderer = inject(Renderer2);
  private location = inject(Location);
  private files = inject(SOURCE_FILES);

  title = inject(Title);

  ngOnInit() {
    this.files.forEach((file) => {
      const script = this.renderer.createElement('script');
      this.renderer.setAttribute(script, 'src', `https://emgithub.com/embed-v2.js?target=${encodeURIComponent(file)}&style=github&type=code&showLineNumbers=on&showFileMeta=on`)
      this.renderer.appendChild(this.scriptContainer.nativeElement, script);
    })
  }

  back(){
    this.location.back();
  }
}
