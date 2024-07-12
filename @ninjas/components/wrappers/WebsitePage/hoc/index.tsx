import React from "react";
import { NextComponentType, NextPageContext } from "next";
import WebsitePageWrapper, { WebsitePageWrapperProps } from "..";
import WebsiteGlobalProvider from "../provider";

const withWebsitePage = (
  PageComponent: NextComponentType<NextPageContext, any, any>,
  pageWrapperProps: WebsitePageWrapperProps
) => {
  const WebsitePageHOC = (props: any) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper {...pageWrapperProps}>
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );

  return WebsitePageHOC;
};

export default withWebsitePage;
