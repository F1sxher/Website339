import type { NextPage } from "next";
const Calendar: NextPage = () => {
  return (
    <div className="flex justify-center items-center w-screen vh-default-main bg-gray-900">
      <main className="bg-gray-900">
      <iframe src="https://calendar.google.com/calendar/embed?wkst=1&bgcolor=%23F09300&ctz=America%2FNew_York&title&src=a2lscm95cm9ib3RpY3NAZ21haWwuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00&color=%23D81B60" className="border-0 vh-default-main w-screen" scrolling="no"></iframe>
      </main>
    </div>
  );
};

export default Calendar;
