"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000)
  const [interestRate, setInterestRate] = useState(3.5)
  const [loanTerm, setLoanTerm] = useState(30)
  const [propertyTax, setPropertyTax] = useState(0)
  const [insurance, setInsurance] = useState(0)

  const calculateMortgage = () => {
    // Convert annual interest rate to monthly
    const monthlyRate = interestRate / 100 / 12
    // Convert years to months
    const numberOfPayments = loanTerm * 12

    // Calculate mortgage
    const mortgage =
      (loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

    // Add property tax and insurance
    const totalMonthlyPayment = mortgage + (propertyTax / 12) + (insurance / 12)

    return isNaN(totalMonthlyPayment) ? 0 : totalMonthlyPayment.toFixed(2)
  }

  return (
    <Card className=" w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle>Mortgage Calculator</CardTitle>
        <CardDescription>Calculate your estimated monthly mortgage payment.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="loanAmount">Loan Amount : {loanAmount}kshs</Label>
          <Slider
            id="loanAmount"
            min={0}
            max={1000000}
            step={1000}
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="interestRate">Interest Rate: {interestRate}%</Label>
          <Slider
            id="interestRate"
            min={0}
            max={10}
            step={0.1}
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="loanTerm">Loan Term: {loanTerm} years</Label>
          <Slider
            id="loanTerm"
            min={1}
            max={30}
            step={1}
            value={[loanTerm]}
            onValueChange={(value) => setLoanTerm(value[0])}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="propertyTax">Annual Property Tax</Label>
          <Input
            id="propertyTax"
            type="number"
            placeholder="Annual property tax"
            value={propertyTax}
            onChange={(e) => setPropertyTax(Number(e.target.value))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="insurance">Annual Insurance</Label>
          <Input
            id="insurance"
            type="number"
            placeholder="Annual insurance"
            value={insurance}
            onChange={(e) => setInsurance(Number(e.target.value))}
          />
        </div>
        <div className="pt-6 text-center">
          <h3 className="text-2xl font-bold">
            Estimated Monthly Payment: Kshs{calculateMortgage()}
          </h3>
        </div>
      </CardContent>
    </Card>
  )
}