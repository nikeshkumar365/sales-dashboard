import Button from "../atoms/Button";
import { Year, YEARS } from "../../data/sales";

type YearSelectorProps = {
  selected: Year;
  onChange: (year: Year) => void;
};

export default function YearSelector({ selected, onChange }: YearSelectorProps) {
  return (
    <div className="flex gap-2">
      {YEARS.map((year) => (
        <Button key={year} active={year === selected} onClick={() => onChange(year)}>
          {year}
        </Button>
      ))}
    </div>
  );
}
