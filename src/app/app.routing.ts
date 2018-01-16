import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LpzsComponent } from "./lpzs/lpzs.component";
import { NewLpzComponent } from "./new-lpz/new-lpz.component";

import { WorksComponent } from "./works/works.component";
import { NewWorkComponent } from "./new-work/new-work.component";

const APP_ROUTES: Routes = [
    { path: '', component: WorksComponent },
    { path: 'lpz', component: LpzsComponent },
    { path: 'new-lpz', component: NewLpzComponent },

    { path: 'works', component: WorksComponent },
    { path: 'new-work', component: NewWorkComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);