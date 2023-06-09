import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CategoryComponent } from './pages/category/category.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { LayoutComponent } from './components/layouts/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TestComponent } from './pages/test/test.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { FilterPipe } from './filter.pipe';
import { PproductListComponent } from './pages/pproduct-list/pproduct-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CategoryComponent,
    NotFoundPageComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductsComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    LayoutAdminComponent,
    LayoutComponent,
    SidebarComponent,
    TestComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    FilterPipe,
    PproductListComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
