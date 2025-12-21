using System;

namespace Domain;

public class Activity
{
    // Name of event props
    // writing ? after the name of a property allows is to be nullable/optional e.g. public string Title? 
    // Prob best to keep it on, as it means that the value MUST be available. 
    // Add required after e.g public required string Title
    public string Id { get; set; } = Guid.NewGuid().ToString();
    public required string Title { get; set; }

    public DateTime Date { get; set; }

    public required string Description { get; set;}

    public required string Category { get; set; }

    public bool IsCancelled { get; set; }

    // Location props

    public required string City { get; set; }

    public required string Venue { get; set; }

    public double Latitude { get; set; }
    
    public double Longitude { get; set; }
}
