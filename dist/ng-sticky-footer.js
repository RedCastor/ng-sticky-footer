(function(angular) {
    "use strict";
    var module = angular.module("ngStickyFooter", []);
    module.directive("stickyFooter", [ "$window", "$timeout", function($window, $timeout) {
        return {
            restrict: "AE",
            transclude: false,
            scope: {
                stickyFooterWrapper: "@",
                stickyFooterContainer: "@",
                stickyFooterContent: "@",
                stickyFooterIf: "@"
            },
            link: function($scope, element, attrs) {
                var timeoutFixHeight = null;
                var param = {};
                param.wrapperName = $scope.stickyFooterWrapper || "sticky-footer-wrapper";
                param.footerContainer = $scope.stickyFooterContainer === "true" || false;
                param.contentName = $scope.stickyFooterContent || param.wrapperName;
                param.ifWrapperHeight = $scope.stickyFooterIf === "true" || false;
                var sticky_footer = element[0];
                var sticky_footer_wrapper = angular.element("." + param.wrapperName);
                var sticky_footer_wrapper_content = angular.element("." + param.contentName);
                var window = angular.element($window);
                function setHeights() {
                    if (timeoutFixHeight === null) {
                        timeoutFixHeight = $timeout(function() {
                            var footer_height = element.outerHeight();
                            var window_height = window.height() - sticky_footer_wrapper.position().top;
                            var content_height = sticky_footer_wrapper_content.outerHeight();
                            if (param.ifWrapperHeight !== false || content_height < window_height - footer_height) {
                                if (param.ifWrapperHeight !== false) {
                                    sticky_footer_wrapper.css("bottom", footer_height);
                                    sticky_footer_wrapper.css("height", "");
                                } else {
                                    sticky_footer_wrapper.css("bottom", "");
                                    sticky_footer_wrapper.css("height", window_height - footer_height);
                                }
                                sticky_footer.style.position = param.footerContainer !== false ? "absolute" : "relative";
                                sticky_footer.style.height = "auto";
                                sticky_footer.style.marginLeft = "0px";
                                sticky_footer.style.marginRight = "0px";
                                if (param.footerContainer !== false) {
                                    sticky_footer.style.bottom = "0px";
                                }
                            } else {
                                sticky_footer_wrapper.css("bottom", "");
                                sticky_footer_wrapper.css("height", "");
                                sticky_footer.style.position = "";
                                sticky_footer.style.height = "";
                                sticky_footer.style.marginLeft = "";
                                sticky_footer.style.marginRight = "";
                                if (param.footerContainer !== false) {
                                    sticky_footer.style.bottom = "";
                                }
                            }
                            timeoutFixHeight = null;
                        }, 100);
                    }
                }
                setHeights();
                var observer = new MutationObserver(function(mutations) {
                    setHeights();
                });
                observer.observe(element[0], {
                    childList: true,
                    subtree: true
                });
                $scope.$watch(function() {
                    return sticky_footer_wrapper.height();
                }, function(newValue, oldValue) {
                    if (newValue !== oldValue) {
                        setHeights();
                    }
                });
                angular.element($window).on("resize", setHeights);
                $scope.$on("stickyFooterResizeAll", function() {
                    setHeights();
                    $scope.$apply();
                });
                $scope.$on("$destroy", function() {
                    angular.element($window).off("resize", setHeights);
                });
            }
        };
    } ]);
})(window.angular);
//# sourceMappingURL=ng-sticky-footer.js.map
