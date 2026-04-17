import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('renders table', async () => {
    render(<App />);

    expect(await screen.findByRole('table')).toBeInTheDocument();
  });

  it('opens hireDate picker and shows content', async () => {
    render(<App />);

    const hireDateHeaderCells = await screen.findAllByTestId('mtt-table-header-cell.hireDate');
    const hireDateHeaderCell = hireDateHeaderCells[0];

    const datePickerButton = within(hireDateHeaderCell).getAllByRole('button', { name: /choose date/i })[0];
    fireEvent.click(datePickerButton);

    const pickerSurface = await screen.findByRole('dialog').catch(async () => {
      return screen.findByRole('tooltip');
    });

    expect(pickerSurface).toBeInTheDocument();
    expect(within(pickerSurface).getByRole('button', { name: /previous month/i })).toBeInTheDocument();
    expect(within(pickerSurface).getByRole('button', { name: /next month/i })).toBeInTheDocument();
  });
});
