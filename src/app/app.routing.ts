import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LpzsComponent } from "./lpzs/lpzs.component";
import { NewLpzComponent } from "./new-lpz/new-lpz.component";



const APP_ROUTES: Routes = [
    { path: '', component: LpzsComponent },
    { path: 'new-lpz', component: NewLpzComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);