"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.animationTrigger = false;
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.onButtonTap = function () {
        this.animationTrigger = !this.animationTrigger;
    };
    AboutComponent = __decorate([
        core_1.Component({
            selector: "About",
            moduleId: module.id,
            templateUrl: "./about.component.html",
            styleUrls: ['./about.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxEO0lBSUM7UUFGQSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFHekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNoRCxDQUFDO0lBWlcsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDcEMsQ0FBQzs7T0FDVyxjQUFjLENBYTFCO0lBQUQscUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiBcIkFib3V0XCIsXHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHR0ZW1wbGF0ZVVybDogXCIuL2Fib3V0LmNvbXBvbmVudC5odG1sXCIsXHJcblx0c3R5bGVVcmxzOiBbJy4vYWJvdXQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBcclxuXHRhbmltYXRpb25UcmlnZ2VyID0gZmFsc2U7XHJcblxyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKTogdm9pZCB7XHJcblx0fVxyXG5cclxuXHRvbkJ1dHRvblRhcCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYW5pbWF0aW9uVHJpZ2dlciA9ICF0aGlzLmFuaW1hdGlvblRyaWdnZXI7XHJcblx0fVxyXG59Il19