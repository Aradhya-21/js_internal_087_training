using System;

// ================== BASE CLASS ==================
abstract class Patient
{
    public int PatientId { get; }
    public string Name { get; set; }
    public int Age { get; set; }
    public string Gender { get; set; }
    public string Doctor { get; set; }
    public DateTime AdmissionDate { get; }

    private static int counter = 1000;

    protected Patient(string name, int age, string gender, string doctor)
    {
        PatientId = ++counter;
        Name = name;
        Age = age;
        Gender = gender;
        Doctor = doctor;
        AdmissionDate = DateTime.Now;
    }

    public abstract double GetBaseCharge();
}

// ================== DERIVED CLASSES ==================
class OPDPatient : Patient
{
    public OPDPatient(string name, int age, string gender, string doctor)
        : base(name, age, gender, doctor) { }

    public override double GetBaseCharge()
    {
        return 500; // consultation charge
    }
}

class IPDPatient : Patient
{
    public IPDPatient(string name, int age, string gender, string doctor)
        : base(name, age, gender, doctor) { }

    public override double GetBaseCharge()
    {
        return 2500; // room + treatment
    }
}

class EmergencyPatient : Patient
{
    public EmergencyPatient(string name, int age, string gender, string doctor)
        : base(name, age, gender, doctor) { }

    public override double GetBaseCharge()
    {
        return 4000; // critical care
    }
}

// ================== DELEGATE ==================
delegate double BillingStrategy(double amount);

// ================== EVENT PUBLISHER ==================
class Hospital
{
    public event Action<string> Notify;

    public void AdmitPatient(Patient patient, BillingStrategy billingLogic)
    {
        double baseAmount = patient.GetBaseCharge();
        double finalBill = billingLogic(baseAmount);

        Console.WriteLine("\n====== PATIENT BILL ======");
        Console.WriteLine($"ID            : {patient.PatientId}");
        Console.WriteLine($"Name          : {patient.Name}");
        Console.WriteLine($"Age/Gender    : {patient.Age} / {patient.Gender}");
        Console.WriteLine($"Doctor        : {patient.Doctor}");
        Console.WriteLine($"Patient Type  : {patient.GetType().Name}");
        Console.WriteLine($"Admitted On   : {patient.AdmissionDate}");
        Console.WriteLine($"Total Bill    : ${finalBill}");
        Console.WriteLine("==========================");

        Notify?.Invoke($"{patient.GetType().Name} {patient.Name} admitted.");
    }
}

// ================== EVENT SUBSCRIBERS ==================
class Pharmacy
{
    public void Update(string msg)
    {
        Console.WriteLine("Pharmacy Alert → " + msg);
    }
}

class Accounts
{
    public void Update(string msg)
    {
        Console.WriteLine("Accounts Alert → " + msg);
    }
}

// ================== MAIN ==================
class Program
{
    static void Main()
    {
        Hospital hospital = new Hospital();

        hospital.Notify += new Pharmacy().Update;
        hospital.Notify += new Accounts().Update;

        Console.Write("Name: ");
        string name = Console.ReadLine();

        Console.Write("Age: ");
        int age = int.Parse(Console.ReadLine());

        Console.Write("Gender: ");
        string gender = Console.ReadLine();

        Console.Write("Doctor Assigned: ");
        string doctor = Console.ReadLine();

        Console.WriteLine("\nSelect Patient Type:");
        Console.WriteLine("1. OPD");
        Console.WriteLine("2. IPD");
        Console.WriteLine("3. Emergency");

        int type = int.Parse(Console.ReadLine());

        Patient patient = type switch
        {
            1 => new OPDPatient(name, age, gender, doctor),
            2 => new IPDPatient(name, age, gender, doctor),
            3 => new EmergencyPatient(name, age, gender, doctor),
            _ => throw new Exception("Invalid patient type")
        };

        BillingStrategy billing = amount => amount + 500; // service charge

        hospital.AdmitPatient(patient, billing);

        Console.ReadKey();
    }
}
