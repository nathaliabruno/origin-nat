import ReachDateComponent from './index';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../utils/test-utils';

describe('ReachDateComponent', () => {
  describe('Check isCurrentMonth', () => {
    it('Get the current Month', () => {
      const component = renderWithProviders(<ReachDateComponent />);
      expect(component.getByTestId('month').innerHTML).toBe('December');
    });
  });
  describe('Avoid previous month', () => {
    it('Do not change to november', () => {
      const component = renderWithProviders(<ReachDateComponent />);

      fireEvent.click(component.getByTestId('prev'));

      expect(screen.getByTestId('month').innerHTML).toBe('December');
    });
  });
  describe('Get Next Month', () => {
    it('Change to January', () => {
      const component = renderWithProviders(<ReachDateComponent />);

      fireEvent.click(component.getByTestId('next'));

      expect(screen.getByTestId('month').innerHTML).toBe('January');
    });
  });
});
