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
  describe('Check keyboard', () => {
    it('if focused change months by keyboard', () => {
      const component = renderWithProviders(<ReachDateComponent />);

      fireEvent.click(component.getByTestId('next'));

      expect(screen.getByTestId('month').innerHTML).toBe('January');
    });
  });
});
