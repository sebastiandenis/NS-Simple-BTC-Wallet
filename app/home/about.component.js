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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWJvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBUWxEO0lBSUM7UUFGQSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7SUFHekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNoRCxDQUFDO0lBWlcsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDcEMsQ0FBQzs7T0FDVyxjQUFjLENBYTFCO0lBQUQscUJBQUM7Q0FBQSxBQWJELElBYUM7QUFiWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcIkFib3V0XCIsXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHRlbXBsYXRlVXJsOiBcIi4vYWJvdXQuY29tcG9uZW50Lmh0bWxcIixcblx0c3R5bGVVcmxzOiBbJy4vYWJvdXQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFib3V0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBcblx0YW5pbWF0aW9uVHJpZ2dlciA9IGZhbHNlO1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHR9XG5cblx0bmdPbkluaXQoKTogdm9pZCB7XG5cdH1cblxuXHRvbkJ1dHRvblRhcCgpOiB2b2lkIHtcblx0XHR0aGlzLmFuaW1hdGlvblRyaWdnZXIgPSAhdGhpcy5hbmltYXRpb25UcmlnZ2VyO1xuXHR9XG59Il19