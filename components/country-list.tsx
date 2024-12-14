import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Country } from "@/types/country";

interface CountryListProps {
  countries: Country[];
}

export function CountryList({ countries }: CountryListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {countries.map((country) => (
        <Link href={`/country/${country.cca3}`} key={country.cca3}>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>
                <Image
                  src={country.flags.svg}
                  alt={`${country.name.common} flag`}
                  width={32}
                  height={24}
                  className="w-8 h-6 mr-2 mb-3"
                />
                {country.name.common}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Capital: {country.capital?.[0] || "N/A"}</p>
              <p>Region: {country.region || "N/A"}</p>
              <p>Population: {country.population.toLocaleString() || "N/A"}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}