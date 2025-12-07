import { Component, signal } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    IonApp,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
  ],
  template: `
    <ion-app>
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Aplicación de Práctica Grupo C</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content [fullscreen]="true">
        <ion-card>
          <ion-card-header>
            <ion-card-title
              [style.color]="titleColor()"
            >
              {{ titleText() }}
            </ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-item>
              <ion-label position="stacked">Título</ion-label>
              <ion-input
                [(ngModel)]="title"
                placeholder="Escribe el título aquí"
                (ionInput)="onTitleChange()"
              ></ion-input>
            </ion-item>

            <ion-item>
              <ion-label position="stacked">Datos / Descripción</ion-label>
              <ion-input
                [(ngModel)]="description"
                placeholder="Escribe una descripción"
              ></ion-input>
            </ion-item>

            <div style="margin-top: 16px; text-align: center;">
              <ion-button
                color="secondary"
                (click)="toggleTitleColor()"
              >
                Cambiar color del título
              </ion-button>
            </div>

            <p style="margin-top: 16px; font-size: 14px;">
              <strong>Datos actuales:</strong><br />
              {{ description || 'Sin descripción aún.' }}
            </p>
          </ion-card-content>
        </ion-card>
      </ion-content>
    </ion-app>
  `,
})
export class AppComponent {
  // estado del título y descripción
  title = 'Título de ejemplo';
  description = '';

  // usamos signals para el color y el texto mostrados
  private _titleColor = signal<string>('black');
  private _titleText = signal<string>(this.title);

  titleColor = this._titleColor.asReadonly();
  titleText = this._titleText.asReadonly();

  onTitleChange(): void {
    this._titleText.set(this.title || 'Título de ejemplo');
  }

  toggleTitleColor(): void {
    const newColor = this._titleColor() === 'black' ? 'red' : 'black';
    this._titleColor.set(newColor);

    // Ejemplo de modificación de variable CSS global
    document.body.style.setProperty('--app-title-color', newColor);
  }
}
