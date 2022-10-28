import React from 'react';
import { waitForElementToBeRemoved, render, screen } from '@testing-library/react';
import SearchBox from "./components/SearchBox/SearchBox";
import App from './App';
import userEvent from "@testing-library/user-event";
import nock from "nock";
import beers from "./data/testData/beers";

const corsHeader = { 'Access-Control-Allow-Origin': "*" };
nock('https://api.punkapi.com').persist().get('/v2/beers').reply(200, beers, corsHeader);

const waitUntilBeersLoaded = async () => {
  await waitForElementToBeRemoved(() => screen.getByText("Loading..."));
}

test('render label element', () => {
    render(<SearchBox />);
    expect(screen.getByText('Beer search')).toBeInTheDocument();
});

test('should show if any of checkboxes is checked', async () => {
  render(<App/>);
  await waitUntilBeersLoaded();

  const checkboxABV = screen.getByRole('checkbox', {name : "High ABV"});
  const checkboxClassic = screen.getByRole('checkbox', {name : "Classic"});
  const checkboxAcidic = screen.getByRole('checkbox', {name : "Acidic"});

  userEvent.click(checkboxABV);
  userEvent.click(checkboxClassic);
  userEvent.click(checkboxAcidic);

  expect(checkboxABV).toBeChecked();
  expect(checkboxClassic).toBeChecked();
  expect(checkboxAcidic).toBeChecked();
});

test('should render a card "Buzz" when search input is "buzz"', async () => {
  const {container} = render(<App/>);
  await waitUntilBeersLoaded();
  
  const cardNameInput = screen.getByRole("textbox", {name : "Beer search"})
  userEvent.type(cardNameInput, "buzz");
  const cards = container.getElementsByClassName("card");

  expect(cards.length).toBe(1);
  expect(cards[0].innerHTML).toContain("Buzz");
});

test('should render all cards with high ABV when checkbox High ABV is checked', async () => {
  const {container} = render(<App/>);
  await waitUntilBeersLoaded();
  
  const checkboxABV = screen.getByRole('checkbox', {name : "High ABV"});
  userEvent.click(checkboxABV);
  const cards = container.getElementsByClassName("card");
  
  expect(cards.length).toBe(2);
})

