import React, { Suspense } from "react";

const LayoutContainer = React.lazy(() => import("../layout/layout.jsx"));

export function Layout() {
    document.title = "Talk Space";
    return (
        <Suspense fallback={(
            <div className="flex flex-col items-center justify-center h-screen">
                <svg xmlns="http://www.w3.org/2000/svg" width="5em" height="5em" viewBox="0 0 24 24">
                    <circle cx="18" cy="12" r="0" fill="currentColor">
                        <animate attributeName="r" begin=".67" calcMode="spline" dur="2.5s"
                            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                            values="0;2;0;0"></animate>
                    </circle>
                    <circle cx="12" cy="12" r="0" fill="currentColor">
                        <animate attributeName="r" begin=".33" calcMode="spline" dur="1.5s"
                            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                            values="0;2;0;0"></animate>
                    </circle>
                    <circle cx="6" cy="12" r="0" fill="currentColor">
                        <animate attributeName="r" begin="0" calcMode="spline" dur="1.5s"
                            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite"
                            values="0;2;0;0"></animate>
                    </circle>
                </svg>
                <div className="loading-text">
                    Loading, please wait...
                </div>
            </div>
        )}>
            <LayoutContainer />
        </Suspense>

    )
};

export default Layout;