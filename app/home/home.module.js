"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var angular_3 = require("nativescript-ui-calendar/angular");
var angular_4 = require("nativescript-ui-chart/angular");
var angular_5 = require("nativescript-ui-dataform/angular");
var angular_6 = require("nativescript-ui-autocomplete/angular");
var angular_7 = require("nativescript-ui-gauge/angular");
var forms_1 = require("nativescript-angular/forms");
var home_routing_module_1 = require("./home-routing.module");
var home_component_1 = require("./home.component");
var dashboard_component_1 = require("./dashboard.component");
var addresses_component_1 = require("./addresses.component");
var about_component_1 = require("./about.component");
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule,
                angular_3.NativeScriptUICalendarModule,
                angular_4.NativeScriptUIChartModule,
                angular_5.NativeScriptUIDataFormModule,
                angular_6.NativeScriptUIAutoCompleteTextViewModule,
                angular_7.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                home_routing_module_1.HomeRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                home_component_1.HomeComponent,
                dashboard_component_1.DashboardComponent,
                addresses_component_1.AddressesComponent,
                about_component_1.AboutComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], HomeModule);
    return HomeModule;
}());
exports.HomeModule = HomeModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsOERBQW9GO0FBQ3BGLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUNoRixnRUFBZ0c7QUFDaEcseURBQTBFO0FBQzFFLG9EQUFxRTtBQUVyRSw2REFBMEQ7QUFDMUQsbURBQWlEO0FBQ2pELDZEQUEyRDtBQUMzRCw2REFBMkQ7QUFDM0QscURBQW1EO0FBeUJuRDtJQUFBO0lBQTBCLENBQUM7SUFBZCxVQUFVO1FBdkJ0QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQThCO2dCQUM5QixzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLGtEQUF3QztnQkFDeEMsbUNBQXlCO2dCQUN6QixpQ0FBd0I7Z0JBQ3hCLHVDQUFpQjtnQkFDakIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDhCQUFhO2dCQUNiLHdDQUFrQjtnQkFDbEIsd0NBQWtCO2dCQUNsQixnQ0FBYzthQUNqQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBIb21lUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2hvbWUtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVDb21wb25lbnQgfSBmcm9tIFwiLi9ob21lLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vZGFzaGJvYXJkLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWRkcmVzc2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vYWRkcmVzc2VzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tIFwiLi9hYm91dC5jb21wb25lbnRcIjtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlHYXVnZU1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBIb21lUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBIb21lQ29tcG9uZW50LFxuICAgICAgICBEYXNoYm9hcmRDb21wb25lbnQsXG4gICAgICAgIEFkZHJlc3Nlc0NvbXBvbmVudCxcbiAgICAgICAgQWJvdXRDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgSG9tZU1vZHVsZSB7IH1cbiJdfQ==