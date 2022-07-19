import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GuitarCatalougePage } from "./guitar-catalouge/guitar-catalouge.page";
import { LoginPage } from "./login/login.page";
import { ProfilePage } from "./profile/profile.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/login"
    },
    {
        path: "login",
        component: LoginPage
    }, 
    {
        path: "guitars",
        component: GuitarCatalougePage
    },
    {
        path: "profile",
        component: ProfilePage
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ], //import a module
    exports: [
        RouterModule
    ]  //expose module and its features
})
export class AppRoutingModule {

}