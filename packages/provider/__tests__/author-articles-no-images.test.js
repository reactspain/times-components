import React from "react";
import renderer from "react-test-renderer";
import {
  fixtureGenerator,
  MockedProvider
} from "@times-components/provider-test-tools";
import AuthorArticlesNoImagesProvider from "../src/author-articles-no-images-base";

const renderComponent = child =>
  renderer.create(
    <MockedProvider
      mocks={fixtureGenerator.makeArticleMocks({
        longSummaryLength: 360,
        pageSize: 5,
        delay: 0
      })}
    >
      <AuthorArticlesNoImagesProvider
        slug="deborah-haynes"
        pageSize={5}
        page={1}
        shortSummaryLength={220}
        longSummaryLength={360}
        debounceTimeMs={0}
      >
        {child}
      </AuthorArticlesNoImagesProvider>
    </MockedProvider>
  );

describe("AuthorArticlesNoImagesProvider", () => {
  it("returns query result", done => {
    renderComponent(({ isLoading, author }) => {
      if (!isLoading) {
        expect(author).toMatchSnapshot();
        done();
      }

      return null;
    });
  });
});
