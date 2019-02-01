import { Route } from '@angular/router';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { ProductsComponent } from './products/products.component';

export const HomeRoutes: Route[] = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '', component: DashboardComponent
            },
            {
                path: 'settings', component: SettingsComponent
            },
            {
                path: 'products', component: ProductsComponent
            }
        ]
    }
]