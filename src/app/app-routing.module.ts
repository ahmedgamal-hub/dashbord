import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ControlComponent } from './pages/control/control.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ElementsComponent } from './pages/elements/elements.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'elements', component: ElementsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'control', component: ControlComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
